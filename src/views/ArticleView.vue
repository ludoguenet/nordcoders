<template>
  <div class="bg-white dark:bg-gray-700 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Quelques articles
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Améliorez votre expérience de développement web sur Laravel et Vue.
        </p>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

        <article class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time
                datetime="2023-02-25"
                class="text-gray-500"
            >
              Avr 1, 2023
            </time>
            <a
                href="#"
                class="relative z-6 rounded-full bg-red-50 py-1.5 px-3 font-medium text-red-600 hover:bg-red-100"
            >
              Laravel
            </a>
            <a
                href="#"
                class="relative z-6 rounded-full bg-lime-50 py-1.5 px-3 font-medium text-lime-600 hover:bg-lime-100"
            >
              Pest
            </a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400">
              <RouterLink to="/articles/upload-fichiers-laravel-test"
              >
                <span class="absolute inset-0"></span>
                Tester les uploads de fichiers 📁
              </RouterLink>
            </h3>
            <p
                class="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-100 line-clamp-3"
            >
              Dans cet article, nous allons vous guider à travers les étapes pour créer un modèle Media et une migration associée, ainsi qu'une requête d'upload de fichiers pour télécharger des fichiers sur votre application Laravel. Nous allons également découvrir le framework de test Pest pour vérifier le bon fonctionnement de votre application.
            </p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img
                src="/avatar.png"
                alt="avatar ludovic guenet"
                class="h-10 w-10 rounded-full bg-gray-50"
            >
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900 dark:text-white">
                <a
                    href="https://twitter.com/NordCoders"
                    target="_blank"
                >
                  <span class="absolute inset-0"></span>
                  Ludovic Guénet
                </a>
              </p>
              <p class="text-gray-600 dark:text-gray-100">Artisan du web</p>
            </div>
          </div>
        </article>

        <article class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time
                datetime="2023-02-25"
                class="text-gray-500"
            >
              Mar 20, 2023
            </time>
            <a
                href="#"
                class="relative z-6 rounded-full bg-red-50 py-1.5 px-3 font-medium text-red-600 hover:bg-red-100"
            >
              Laravel
            </a>
            <a
                href="#"
                class="relative z-6 rounded-full bg-lime-50 py-1.5 px-3 font-medium text-lime-600 hover:bg-lime-100"
            >
              Pest
            </a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400">
              <RouterLink to="/articles/decouvrir-pest-2"
              >
                <span class="absolute inset-0"></span>
                Les nouveautés Pest 2.0
              </RouterLink>
            </h3>
            <p
                class="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-100 line-clamp-3"
            >
              Pest 2.0 est sorti! Dans cet article nous allons voir les nouveautés de notre framework de test favori. Car tester une application, quel que soit le langage utilisé, est CRUCIAL pour garantir un minimum de qualité logicielle. Vous écrivez un programme qui doit effectuer certaines tâches, mais pour vous assurer qu'il fonctionne correctement, vous devez écrire du code qui teste ce programme et vérifie qu'il fait BIEN ce que vous ATTENDEZ de lui.
            </p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img
                src="/avatar.png"
                alt="avatar ludovic guenet"
                class="h-10 w-10 rounded-full bg-gray-50"
            >
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900 dark:text-white">
                <a
                    href="https://twitter.com/NordCoders"
                    target="_blank"
                >
                  <span class="absolute inset-0"></span>
                  Ludovic Guénet
                </a>
              </p>
              <p class="text-gray-600 dark:text-gray-100">Artisan du web</p>
            </div>
          </div>
        </article>

        <article class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time
                datetime="2023-02-25"
                class="text-gray-500"
            >
              Mar 12, 2023
            </time>
            <a
                href="#"
                class="relative z-6 rounded-full bg-blue-50 py-1.5 px-3 font-medium text-blue-600 hover:bg-blue-100"
            >
              PHP
            </a>
            <a
                href="#"
                class="relative z-6 rounded-full bg-yellow-50 py-1.5 px-3 font-medium text-yellow-600 hover:bg-yellow-100"
            >
              Outils
            </a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400">
              <RouterLink to="/articles/linter-son-code-php-laravel-avec-duster"
              >
                <span class="absolute inset-0"></span>
                Linter son code PHP avec Duster 🧹
              </RouterLink>
            </h3>
            <p
                class="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-100 line-clamp-3"
            >
              Nous allons ensemble faire un petit tour du propriétaire de la librairie de Tighten. Nous allons donc partir de zéro et nous intéresser au linting et à ses différentes options comme le --dirty. Aussi, nous verrons comment greffer à notre workflow d'autres librairies qui seront lancées en même temps que Duster.
            </p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img
                src="/avatar.png"
                alt="avatar ludovic guenet"
                class="h-10 w-10 rounded-full bg-gray-50"
            >
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900 dark:text-white">
                <a
                    href="https://twitter.com/NordCoders"
                    target="_blank"
                >
                  <span class="absolute inset-0"></span>
                  Ludovic Guénet
                </a>
              </p>
              <p class="text-gray-600 dark:text-gray-100">Artisan du web</p>
            </div>
          </div>
        </article>

        <article class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time
                datetime="2023-02-25"
                class="text-gray-500"
            >
              Mar 09, 2023
            </time>
            <a
                href="#"
                class="relative z-6 rounded-full bg-red-50 py-1.5 px-3 font-medium text-red-600 hover:bg-red-100"
            >
              Laravel
            </a>
            <a
                href="#"
                class="relative z-6 rounded-full bg-lime-50 py-1.5 px-3 font-medium text-lime-600 hover:bg-lime-100"
            >
              Pest
            </a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400">
              <RouterLink to="/articles/tester-son-application-laravel-avec-pest-php"
              >
                <span class="absolute inset-0"></span>
                Tester son application avec Pest PHP
              </RouterLink>
            </h3>
            <p
                class="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-100 line-clamp-3"
            >
              Je vais vous présenter le framework de test PEST. Pest est une surcouche à PHPUnit, et reste quelque chose de très simple à prendre en main, que vous ayez l’habitude d’écrire des tests unitaires/fonctionnels ou pas.
            </p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img
                src="/avatar.png"
                alt="avatar ludovic guenet"
                class="h-10 w-10 rounded-full bg-gray-50"
            >
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900 dark:text-white">
                <a
                    href="https://twitter.com/NordCoders"
                    target="_blank"
                >
                  <span class="absolute inset-0"></span>
                  Ludovic Guénet
                </a>
              </p>
              <p class="text-gray-600 dark:text-gray-100">Artisan du web</p>
            </div>
          </div>
        </article>

        <article class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time
                datetime="2023-02-25"
                class="text-gray-500"
            >
              Mar 04, 2023
            </time>
            <a
                href="#"
                class="relative z-6 rounded-full bg-red-50 py-1.5 px-3 font-medium text-red-600 hover:bg-red-100"
            >
              Laravel
            </a>
            <a
                href="#"
                class="relative z-6 rounded-full bg-orange-50 py-1.5 px-3 font-medium text-orange-600 hover:bg-orange-100"
            >
              Eloquent
            </a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400">
              <RouterLink to="/articles/sous-requete-laravel">
                <span class="absolute inset-0"></span>
                Les sous-requêtes avec Eloquent
              </RouterLink>
            </h3>
            <p
                class="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-100 line-clamp-3"
            >
              Eloquent est un ORM (Object Relational Mapper) fabuleux. Il nous permet de récupérer nos données de façon optimisée et avec beaucoup de simplicité. Il faut cependant maîtriser les bases du langage SQL pour pouvoir en profiter pleinement. Passer cette étape, sélectionner le jeu de données souhaité est enfantin.
            </p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img
                src="/avatar.png"
                alt="avatar ludovic guenet"
                class="h-10 w-10 rounded-full bg-gray-50"
            >
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900 dark:text-white">
                <a
                    href="https://twitter.com/NordCoders"
                    target="_blank"
                >
                  <span class="absolute inset-0"></span>
                  Ludovic Guénet
                </a>
              </p>
              <p class="text-gray-600 dark:text-gray-100">Artisan du web</p>
            </div>
          </div>
        </article>

      </div>
    </div>
  </div>
</template>
