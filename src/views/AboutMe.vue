TODO : changer le nom du fichier
<template>
  <section class="about">
    <div class="description">
      <h2>A propos de moi</h2>
      <p>
        Je suis passionné par le secteur du web et du design. Après plusieurs
        années dans l'infographie, j'ai acquis des compétences de développeur
        Frontend. Je suis un développeur autodidacte.
      </p>
    </div>
  </section>
  <section>2</section>
  <section class="about min-vw-100">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card">
            <img
              src="https://picsum.photos/id/237/200/150"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card">
            <img
              src="https://picsum.photos/id/238/200/150"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card">
            <img
              src="https://picsum.photos/id/239/200/150"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>4</section>
</template>

<script setup></script>

<style>
.description {
  align-items: center;
}
h2 {
  padding-top: 10rem;
  text-transform: uppercase;
  font-size: 20px;
  font-family: rubik;
  font-weight: bold;
  color: white;
}
section p {
  padding-top: 2rem;
  padding-bottom: 10rem;
  margin-left: 8rem;
  margin-right: 8rem;
  font-size: 20px;
  font-family: rubik;
  font-weight: light;
  color: white;
}
.about {
  /* height: 80vh; */
  background-color: #6e07f3;

  /* background-color: #07f3b8; */
}
.container {
  padding-top: 10rem;
  padding-bottom: 10rem;
}
</style>
