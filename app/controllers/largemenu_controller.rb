class LargemenuController < ApplicationController
  def index
    @dishes = Dish.all
  end
end
