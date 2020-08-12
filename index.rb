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

    
binding.pry