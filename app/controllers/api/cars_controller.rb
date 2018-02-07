class Api::CarsController < ApplicationController

  def show
    @car = Car.find(params[:id])
    render :show
  end

  def index
    if params[:query]
      @cars = Car.search(params[:query])
    else
      @cars = Car.all
    end
      render :index
    end
  end
