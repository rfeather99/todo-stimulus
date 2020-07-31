# frozen_string_literal: true

class Board < ApplicationRecord
  has_many :todos
  has_many :statuses
end
