g = Fiber.new do |x|
  loop { Fiber.yield(x); x += 1 }
end

5.times { puts g.resume(0) }
