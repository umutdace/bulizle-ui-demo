<template>
     <aside class="main-sidebar sidebar-dark-primary elevation-4">

    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../../assets/logo.png" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Umut Baglan</a>
        </div>
      </div>
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item">
            <a href="../admin/news" class="nav-link">
              <i class="fa fa-newspaper-o" aria-hidden="true"></i>
              <p>
                Haberler
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="../admin/contents" class="nav-link">
              <i class="fa fa-film" aria-hidden="true"></i>
              <p>
                İçerikler
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="../admin/platforms" class="nav-link">
              <i class="fa fa-cube" aria-hidden="true"></i>
              <p>
                Platformlar
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="../admin/categories" class="nav-link">
              <i class="fa fa-object-group" aria-hidden="true"></i>
              <p>
                Kategoriler
              </p>
            </a>
          </li> 
        </ul>
      </nav>
    </div>
  </aside>
</template>


<style scoped>
@import url('../../css/adminlte.min.css');
</style>