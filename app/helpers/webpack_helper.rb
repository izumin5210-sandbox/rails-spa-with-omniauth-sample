module WebpackHelper
  def webpack_asset_url(asset)
    "/assets/#{manifest.fetch(asset)}"
  end

  def manifest
    @manifest ||= JSON.parse(File.read(Rails.root.join('public', 'assets', 'manifest.json')))
  rescue
    fail 'Please run webpack'
  end
end
