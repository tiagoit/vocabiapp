require 'nokogiri'

# Fetch and parse HTML document
doc = Nokogiri::HTML(open('./db/words.html'))

words = []

# Search for nodes by css
doc.css('table table table tr').each_with_index do |tr, i|
  next if i < 2

  rank = (tr > 'td')[0].inner_text
  word = (tr > 'td')[1].inner_text
  pos = (tr > 'td')[2].inner_text
  words << { id: rank, en: word, pos: pos, created_at: Time.zone.now, updated_at: Time.zone.now }
end

Word.insert_all(words)