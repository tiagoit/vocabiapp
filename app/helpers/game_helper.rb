module GameHelper
  def answers_array(answer_index)
    arr = []
    answer_rand = rand(0..5)
    5.times do |i|
      arr << (i.eql?(answer_rand) ? answer_index : rand(0..29))
    end
    arr
  end
end
