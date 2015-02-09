class ItemsController < ApplicationController

  def index
    @items = Item.all
  end

  def create
    @item = Item.create(item_params)
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])
    @item.update_attributes(item_params)

  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy!

    respond_to do |format|
      format.js {render :nothing => true}
    end
  end

  def new_form
  end

  def search
    @items = Item.where("name LIKE ?", "%#{params[:search_item_name]}%")
  end

  private

  def item_params
    params.require(:item).permit(:name)
  end
end
