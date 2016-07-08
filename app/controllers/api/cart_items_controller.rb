class Api::CartItemsController < ApplicationController
  def index
    @cart_items = CartItem.all
  end

  def create
    @cart_item = CartItem.new(cart_item_params)
    if(@cart_item.save)
      render :show
    else
      render json: @cart_item.errors, status: 422
    end
  end
  
  def destroy
    @cart_item = CartItem.find(params[:id])
    if(@cart_item.destroy)
      render "/api/cart_items/show", status: 200
    else
      @errors = @cart_item.errors.full_messages
      render "/api/shared/error", status: 422
    end
  end

  private
  def cart_item_params
    params.require(:cart_item).permit(:cart_id, :product_id, :quantity)
  end
end
