file = File.open('input.txt')
file_data = file.readlines.map(&:chomp)
a = []
final = []
(0..file_data.length).each do |i|
  line = file_data[i]
  if line.nil? || line.empty?
    final.push(a.sum)
    a = []
  else
    a.push(line.to_i)
  end
end

puts final.sort {|x, y| y <=> x}.first(3).sum
