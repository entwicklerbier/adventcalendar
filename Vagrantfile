$app_dir = "/home/vagrant/app"

# small bashscript for installation of node/npm and webpack
$script = <<SCRIPT
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y build-essential nodejs
sudo npm install -g webpack webpack-dev-server
sudo apt-get -y autoremove
cd #{$app_dir}
npm install
SCRIPT

Vagrant.configure(2) do |config|

  config.vm.hostname = 'adventcalendar.local'

  config.vm.box = 'ubuntu/trusty64'

  config.vm.network 'forwarded_port', guest: 8080, host: 8080

  # sync dist folders
  config.vm.synced_folder "./dist/", "#{$app_dir}/dist/"

# Don't sync git
  config.vm.synced_folder ".", $app_dir, type: "rsync",
    rsync__exclude: [".git/", "node_modules/"]

  # Configure the window for gatling to coalesce writes.
  if Vagrant.has_plugin?("vagrant-gatling-rsync")
    config.gatling.latency = 2.5
    config.gatling.time_format = "%H:%M:%S"

    # Automatically sync when machines with rsync folders come up.
    config.gatling.rsync_on_startup = true
  end

  config.vm.provision 'shell', inline: $script

  config.vm.provider "virtualbox" do |v|
    v.memory = 1024
  end
end
