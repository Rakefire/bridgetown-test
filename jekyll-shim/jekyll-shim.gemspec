Gem::Specification.new do |s|
  s.name      = "jekyll-shim"
  s.version   = "0.0.1"
  s.platform  = Gem::Platform::RUBY
  s.summary   = "Fake Jekyll Shim so that `bundle exec jekyll *` will work"
  s.description = "Fake Jekyll Shim so that `bundle exec jekyll *` will work"
  s.authors   = ["Ricky Chilcott"]
  s.email     = ["ricky@missionmet.com"]
  s.homepage  = "http://rubygems.org/gems/jekyll-shim"
  s.license   = "MIT"
  s.files     = Dir.glob("{lib,bin}/**/*")
  s.require_path = "lib"
  s.executables = ["jekyll"]
end