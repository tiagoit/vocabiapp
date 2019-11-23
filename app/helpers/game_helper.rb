module GameHelper
  # Generate a randomized array with indexes to use as answer options,
  # also includes the correct answer on a random position.
  def answers_array(answer_index)
    arr = []
    answer_rand = rand(0..4)
    5.times do |i|
      if i.eql?(answer_rand)
        arr << answer_index
      else
        rand_idx = 0
        loop do
          rand_idx = rand(0..29)
          break unless arr.include?(rand_idx) || rand_idx.eql?(answer_index)
        end
        arr << rand_idx
      end
    end
    arr
  end
end
