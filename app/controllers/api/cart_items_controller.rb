class Api::CartItemsController < ApplicationController
  def index
    if(current_user)
      @cart_items = CartItem.all.where(cart_id: current_user.id)
    else
      @cart_items = []
    end
  end

  def create
    @cart_item = CartItem.new(cart_item_params)
    if(@cart_item.save)
      render :show
    else
      render json: @cart_item.errors, status: 422
    end
  end

  def update
    @cart_item = CartItem.find(params[:id])
    if @cart_item.update(cart_item_params)
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
