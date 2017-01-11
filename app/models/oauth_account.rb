# ## Schema Information
#
# Table name: `oauth_accounts`
#
# ### Columns
#
# Name                 | Type               | Attributes
# -------------------- | ------------------ | ---------------------------
# **`id`**             | `integer`          | `not null, primary key`
# **`user_id`**        | `integer`          | `not null`
# **`uid`**            | `string`           | `not null`
# **`provider`**       | `string`           | `not null`
# **`name`**           | `string`           |
# **`nickname`**       | `string`           |
# **`email`**          | `string`           |
# **`url`**            | `string`           |
# **`image_url`**      | `string`           |
# **`access_token`**   | `string`           |
# **`access_secret`**  | `string`           |
# **`raw_info`**       | `text`             |
# **`credentials`**    | `text`             |
# **`created_at`**     | `datetime`         | `not null`
# **`updated_at`**     | `datetime`         | `not null`
#
# ### Indexes
#
# * `index_oauth_accounts_on_uid_and_provider` (_unique_):
#     * **`uid`**
#     * **`provider`**
# * `index_oauth_accounts_on_user_id`:
#     * **`user_id`**
#

class OauthAccount < ApplicationRecord
  belongs_to :user

  validates :uid, uniqueness: { scpoe: [:provider] }
end
