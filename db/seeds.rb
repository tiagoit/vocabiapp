require 'nokogiri'

# Points of speech
pos_codes = {
  n: 'noun',
  v: 'verb',
  j: 'adjective',
  r: 'adverb',
  i: 'preposition',
  p: 'pronoun',
  c: 'conjunction',
  m: 'number',
  d: 'demonstrative',
  u: 'interjection',
  a: 'article',
  x: 'negation',
  e: 'existential',
  t: 'infinitive_marker'
}

###############################################################################
# Fetch and parse HTML document with words
###############################################################################
doc = Nokogiri::HTML(open('./db/words.html'))

words = []
counter = Hash.new(0)
doc.css('table table table tr').each_with_index do |tr, i|
  next if i < 2

  rank = (tr > 'td')[0].inner_text
  word = (tr > 'td')[1].inner_text.gsub!(/\W+/, '') # only letters
  pos = pos_codes[(tr > 'td')[2].inner_text.to_sym] # pos full name

  counter[pos.to_sym] = counter[pos.to_sym] + 1
  words << { rank: rank, pos: pos, en: word.strip,
             created_at: Time.now, updated_at: Time.now }
end

###############################################################################
# Adds level of each word according to POS
###############################################################################
added_words = Hash.new(0)
words.each do |word|
  words_per_pos_level = counter[word[:pos].to_sym] / 5
  level = 0
  unless counter[word[:pos].to_sym].zero? && words_per_pos_level.eql?(0)
    level = added_words[word[:pos].to_sym] / (words_per_pos_level + 1)
  end

  added_words[word[:pos].to_sym] = added_words[word[:pos].to_sym] + 1
  word[:level] = level
end

###############################################################################
# Add pt and es translations
###############################################################################
%w[es pt].each do |lang|
  File.open("db/translations_#{lang}.txt") do |file|
    file.each_with_index { |line, index| words[index][lang.to_sym] = line }
  end
end

###############################################################################
# Bulk insert on Database
###############################################################################
Word.insert_all(words)