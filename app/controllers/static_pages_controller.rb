class StaticPagesController < ApplicationController
  def home
    @pos = %w[nouns verbs adjectives prepositions adverbs]
  end
end
