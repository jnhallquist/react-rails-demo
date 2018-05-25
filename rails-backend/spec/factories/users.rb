FactoryBot.define do
  factory :user do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    job_title { Faker::Name.title }
    phone_number { Faker::PhoneNumber.cell_phone }
    extension { Faker::PhoneNumber.extension }
    email { Faker::Internet.email }
    address_1 { Faker::Address.street_address }
    address_2 { Faker::Address.secondary_address }
    postal_code { Faker::Address.postcode }
    city { Faker::Address.city }
    state { Faker::Address.state }
    country 'United States'
  end
end
