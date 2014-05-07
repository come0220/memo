class CreateMemodbs < ActiveRecord::Migration
  def change
    create_table :memodbs do |t|
        t.string   "name"
        t.string   "url"
        t.datetime "created_at", :null => false
        t.datetime "updated_at", :null => false
    end
  end
end
