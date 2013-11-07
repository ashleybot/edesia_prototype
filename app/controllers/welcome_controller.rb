class WelcomeController < ApplicationController
  def index
    @dishes = Dish.all
  end
end
