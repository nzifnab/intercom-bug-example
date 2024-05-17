class ApplicationController < ActionController::Base
  http_basic_authenticate_with name: "test", password: "Intercom!" if Rails.env.production?
end
