<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-custom p-3">
		<div class="container-fluid">
			<a href="/"><img src="../../assets/bulizle.png" /></a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class=" collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav ms-auto ">
					<li class="nav-item">
						<a class="nav-link mx-2 active" aria-current="page" href="/">Ana Sayfa</a>
					</li>
					<li class="nav-item">
						<a class="nav-link mx-2" href="/series">Diziler</a>
					</li>
					<li class="nav-item">
						<a class="nav-link mx-2" href="/movies">Filmler</a>
					</li>
					<li class="nav-item">
						<a class="nav-link mx-2" href="/news">Haberler</a>
					</li>
					<!--<li class="nav-item dropdown">
						<a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
							data-bs-toggle="dropdown" aria-expanded="false">
							Kategoriler
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<li><a class="dropdown-item" href="#">Korku</a></li>
							<li><a class="dropdown-item" href="#">Bilim Kurgu</a></li>
							<li><a class="dropdown-item" href="#">Romantik</a></li>
						</ul>
					</li>-->
					<li class="nav-item dropdown" v-if="this.status != ''">
						<a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
							data-bs-toggle="dropdown" aria-expanded="false">
							{{ this.authenticationValue.name }} {{ this.authenticationValue.surname }}
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<li><a class="dropdown-item admin-color" href="/admin">Admin</a></li>
							<li><a class="dropdown-item profile-color" href="/profile">Profil</a></li>			
							<li><a class="dropdown-item exit-color" href="/" @click="closeSession()">Çıkış</a></li>
						</ul>
					</li>
					<li class="nav-item">
						<a href="/login" v-if="this.status === ''"><button type="button"
								class="btn btn-outline-light">Giriş</button></a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>

export default {
	data() {
		return {
			status: ''
		}
	},
	created() {
		var session = sessionStorage.getItem("session");
		if (session === null)
			this.status = '';
		else {
			this.status = session;
			this.Authentication(session);
		}

	},
	methods: {
		closeSession() {
			sessionStorage.removeItem("session");
		}
	}
}
</script>

<style scoped>
.profile-color{
	color: rgb(18, 208, 18);
}

.admin-color{
	color: rgb(14, 157, 235);
}
.exit-color{
	color: red;
}
img {
	position: relative;
	width: 125px;
	left: 15px;
	background-size: contain;
}

.bg-custom {
	background-color: black;
}

a {
	font-size: 14px;
	font-weight: 700
}

.superNav {
	font-size: 13px;
}

.form-control {
	outline: none !important;
	box-shadow: none !important;
}

@media screen and (max-width:540px) {
	.centerOnMobile {
		text-align: center
	}
}</style>