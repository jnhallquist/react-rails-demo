class User < ApplicationRecord
  validates_presence_of :first_name,
                        :last_name,
                        :phone_number,
                        :email,
                        :address_1,
                        :postal_code,
                        :city,
                        :state,
                        :country
end
