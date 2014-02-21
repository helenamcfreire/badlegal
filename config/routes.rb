Badlegal::Application.routes.draw do

  root to: 'home#index'

  match '/bad/quem_somos', :to => 'home#quem_somos', :as => 'bad_quem_somos'
  match '/bad/pro_cubango', :to => 'home#pro_cubango', :as => 'bad_pro_cubango'
  match '/bad/jurujuba', :to => 'home#jurujuba', :as => 'bad_jurujuba'
  match '/bad/caio_martins', :to => 'home#caio_martins', :as => 'bad_caio_martins'
  match '/bad/sacada_pro_futuro', :to => 'home#sacada_pro_futuro', :as => 'bad_sacada_pro_futuro'
  match '/bad/fotos', :to => 'home#fotos', :as => 'bad_fotos'
  match '/bad/noticias', :to => 'home#noticias', :as => 'bad_noticias'
  match '/bad/parcerias', :to => 'home#parcerias', :as => 'bad_parcerias'
  match '/bad/contato', :to => 'home#contato', :as => 'bad_contato'

end
