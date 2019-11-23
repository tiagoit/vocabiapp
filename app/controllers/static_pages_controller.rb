class StaticPagesController < ApplicationController
  def home
    @pos = %w[nouns verbs adjectives prepositions adverbs]
  end

  def words_txt
    render plain: Word.all.flat_map(&:en).join("\n")
  end
end
