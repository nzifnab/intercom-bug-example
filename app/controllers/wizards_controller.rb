class WizardsController < ApplicationController
  def show

  end

  def update
    flash[:success] = "Updated #{params[:id]}!"
    redirect_to wizard_path(params[:id].to_i + 1)
  end

  def index
    redirect_to wizard_path(1)
  end
end
