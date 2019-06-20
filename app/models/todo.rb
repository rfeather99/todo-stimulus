class Todo < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :created_by, class_name: 'User'
  belongs_to :modified_by, class_name: 'User'
end
