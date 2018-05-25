class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :job_title, null: true
      t.string :phone_number, null: false
      t.string :extension, null: true
      t.string :email, null: false, unique: true
      t.string :address_1, null: false
      t.string :address_2, null: true
      t.string :postal_code, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :country, null: false

      t.timestamps
    end
  end
end
