require 'pry'

#8.11.2020 Solution "change a parameter into a string"
def numberToString(num)
    num.to_s
  end

#8.12.2020 Solution "Sum of Numbers"
def get_sum(a,b)
  if a < b
    sum_array = Array (a..b)
    sum_array.reduce(0) do |sum, number|
      sum += number
    end
  else  
    sum_array = Array (b..a)
    sum_array.reduce(0) do |sum, number|
    sum += number
    end  
  end
end

#8.13.2020 Solution "toJadenCase"
class String
  def toJadenCase
    self.split(" ").map do |word|
      word.capitalize 
    end.join(" ")
  end
end
    
#8.14.2020 Solution "Basic Mathematical Operations"
def basic_op(operator, value1, value2)
  if operator == "+"
      sum = value1 + value2
  elsif operator == '-'
      sum = value1 - value2
  elsif operator == '*'
      sum = value1 * value2
  elsif operator == '/'
      sum = value1 / value2
  end
  sum
end

#8.14.2020 Solution "Duplicate Encoder"
def duplicate_encode(word)
  word.downcase.chars.map do |char|
    word.downcase.count(char) > 1 ? ')' : '('
  end.join
end

#8.15.2020 Solution "List Filtering"
def filter_list(l)
  l.select do |data|
    data.is_a? Integer
  end
end


binding.pry