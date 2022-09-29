<template>
  <nav class="navbar navbar-expand-md sticky-top">
    <div class="container-fluid mx-auto">
      <div>
        <a class="navbar-brand" href="#"
          ><img class="img-responsive" src="../../public/ .png" alt="" />
        </a>
      </div>

      <div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"
            ><img class="img-responsive" src="../../public/ .png" alt=""
          /></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto text-center">
            <a class="nav-link active" aria-current="page" href="/about"
              >A propos de moi</a
            >
            <a class="nav-link active" aria-current="page" href="/about">
              Mes compétences</a
            >
            <a class="nav-link active" aria-current="page" href="/projets"
              >Mes projets</a
            >
          </ul>
          <a class="nav-link active" aria-current="page" href="/contact"
            >Me contacter</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>

<style>
.img-responsive {
  height: auto;
  width: auto;
  max-height: 25px;
  max-width: 125px;
}
</style>
