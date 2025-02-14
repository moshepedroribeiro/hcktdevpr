require 'rufus-scheduler'
require './config/environment'
scheduler = Rufus::Scheduler.new

scheduler.every '1m' do

  active_cultures = Culture.where(active: true)
  active_cultures.each do |active_culture|
    CultureLogWorker.perform_async(active_culture.id)
  end

end

scheduler.join