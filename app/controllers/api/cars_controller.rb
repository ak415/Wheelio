class Api::CarsController < ApplicationController
  def index
    @cars = Car.all
    render :index
  end

  def show
    @car = Car.find(params[:id])
    render :show
  end
end
