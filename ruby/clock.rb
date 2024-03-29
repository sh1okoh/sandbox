require "io/console"

view_thread = Thread.new do
  loop do
    print "\033[2K\r#{Time.now.strftime("%F %T")}"
    sleep 1
  end
end

input_thread = Thread.new do
  while STDIN.getch != "q"; end
  puts
  view_thread.kill
end

view_thread.join
input_thread.join