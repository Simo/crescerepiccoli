# config valid only for current version of Capistrano
lock '3.4.0'

set :stage, :production

set :application, 'crescerepiccoli'
set :repo_url, 'https://github.com/Simo/crescerepiccoli.git'
set :deploy_to, '/var/www/crescerepiccoli'
set :scm, :git
set :branch, :master

set :rails_env, 'production'
set :deploy_via, :copy
# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, '/var/www/my_app_name'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
set :format, :pretty

# Default value for :log_level is :debug
set :log_level, :debug

# Default value for :pty is false
# set :pty, true
set :assets_roles, [:web, :app]
set :migration_role, [:web, :db]
set :conditionally_migrate, true

# Default value for :linked_files is []
set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'public/uploads')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 5

=begin
after 'deploy:publishing', 'deploy:restart'

namespace :deploy do
  task :restart do
    invoke 'unicorn:restart'
  end
end
=end

#nuovo

namespace :deploy do
  after :finishing, 'deploy:cleanup'
  after 'deploy:publishing', 'deploy:restart'
end

desc "Symlink shared config files"
task :symlink_config_files do
  run "#{ try_sudo } ln -s #{ deploy_to }/shared/config/database.yml #{ current_path }/config/database.yml"
  run "#{ try_sudo } ln -s #{ deploy_to }/shared/config/secrets.yml #{ current_path }/config/secrets.yml"
end
