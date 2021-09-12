f = 0.0
started_time = Time.now.to_i

3.times do
  fork do
    100000000.times { f += 0.001 }
    printf("%.3f\n", f)
  end
end

Process.waitall
puts "it takes #{Time.now.to_i - started_time} s"
