require 'pry'
require 'set'

# #8.11.2020 Solution "change a parameter into a string"
# def numberToString(num)
#     num.to_s
#   end

# #8.12.2020 Solution "Sum of Numbers"
# def get_sum(a,b)
#   if a < b
#     sum_array = Array (a..b)
#     sum_array.reduce(0) do |sum, number|
#       sum += number
#     end
#   else  
#     sum_array = Array (b..a)
#     sum_array.reduce(0) do |sum, number|
#     sum += number
#     end  
#   end
# end

# #8.13.2020 Solution "toJadenCase"
# class String
#   def toJadenCase
#     self.split(" ").map do |word|
#       word.capitalize 
#     end.join(" ")
#   end
# end
    
# #8.14.2020 Solution "Basic Mathematical Operations"
# def basic_op(operator, value1, value2)
#   if operator == "+"
#       sum = value1 + value2
#   elsif operator == '-'
#       sum = value1 - value2
#   elsif operator == '*'
#       sum = value1 * value2
#   elsif operator == '/'
#       sum = value1 / value2
#   end
#   sum
# end

# #8.14.2020 Solution 2 "Duplicate Encoder"
# def duplicate_encode(word)
#   word.downcase.chars.map do |char|
#     word.downcase.count(char) > 1 ? ')' : '('
#   end.join
# end

# #8.15.2020 Solution "List Filtering"
# def filter_list(l)
#   l.select do |data|
#     data.is_a? Integer
#   end
# end

# #8.17.2020 Solution "Returning Strings"
# def greet(name)
#   "Hello, #{name} how are you doing today?"
# end

# #8.18.2020 Solution "Capitalization and Mutability"
# def capitalize_word(word)
#   word.capitalize
# end


# #8.25.2020 Solution "Sum of two lowest positive integers"
# def sum_two_smallest_numbers(numbers)
#   #pull out the lowest two numbers and then add them together
#   sorted_num = numbers.sort
#   sorted_num[0] + sorted_num[1] 
# end

# def sum_two_smallest_numbers(numbers)
#   numbers.min(2).reduce(:+)
# end

# #8.25.2020 Solution 2 Pair coding "unqie ordering"
# def unique_in_order(iterable)
#   iterable = iterable.chars if iterable.is_a?(String)
#   answer = []
#   iterable.each do |el|
#     answer << el if answer.last != el
#   end
#   answer
# end

# #8.27.2020 Solution ""
# def count_chars(s)
#   hash = Hash.new(0)
#   new_array = s.split("")
#   new_array.map do |character|
#     hash[character] += 1
#   end
#   hash
# end

# 12.6.2020 Solution "filter effects"
# positiveEffects2 = ["tired"]
# positiveEffect = ["happy", "giggly"]
# selectedEffects = ["happy", "giggly"]

# def findPosEffects(positiveEffects2, selectedEffects)
#   positiveEffects2.to_set.subset?(selectedEffects.to_set)
# end

# # puts findPosEffects(positiveEffect, selectedEffects)
# puts findPosEffects(positiveEffects2, selectedEffects)

binding.pry