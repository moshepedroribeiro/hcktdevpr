class HomeController < ApplicationController
  def index
    @reactors = Reactor.all

    params[:reactor] ||= @reactors.first.id

    culture = Culture.find(params[:reactor])
    @culture_logs = culture.culture_logs.order(created_at: :desc).limit(24)

    @last_culture_log = @culture_logs.last

    @culture_logs_temperature = @culture_logs.pluck(:temperature)

    @culture_logs_times = @culture_logs.map { |culture_log| culture_log.updated_at.strftime('%H:%M:%S') }
  end
end

