class ReactorsController < ApplicationController
  def new

  end

  def create
    Reactor.create!(name: params[:name], code: params[:code])

    redirect_to action: :new
  end

  private

  def reactor_params
    params.permit(:name, :code)
  end
end
