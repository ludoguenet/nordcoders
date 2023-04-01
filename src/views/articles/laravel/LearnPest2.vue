<template>
  <div class="bg-white dark:bg-gray-700 py-32 px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <p class="text-base font-semibold leading-7 text-green-600 space-x-2">
        <span class="inline-flex items-center rounded-full bg-red-50 py-1.5 px-3 text-xs font-medium text-red-600">
          Laravel
        </span>
        <span class="inline-flex items-center rounded-full bg-lime-50 py-1.5 px-3 text-xs font-medium text-lime-600">
          Pest
        </span>
      </p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        Les nouveautés Pest 2.0
      </h1>
      <p class="mt-6 text-xl leading-8 dark:text-gray-50">
        Pest 2.0 est sorti! Dans cet article nous allons voir les nouveautés de notre framework de test favori. Car tester une application, quel que soit le langage utilisé, est <span class="font-semibold">CRUCIAL</span> pour garantir un minimum de qualité logicielle.
      </p>

      <p class="mt-6 text-xl leading-8 dark:text-gray-50">
        Vous écrivez un programme qui doit effectuer certaines tâches, mais pour vous assurer qu'il fonctionne correctement, vous devez écrire du code qui teste ce programme et vérifie qu'il fait <span class="font-semibold">BIEN</span> ce que vous <span class="font-semibold">ATTENDEZ</span> de lui.
      </p>

        <div class="aspect-w-16 aspect-h-9 mt-6">
          <iframe src="https://www.youtube.com/embed/JDG_JPuOBA4" title="Les nouveautés Pest 2.0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="rounded" allowfullscreen></iframe>
        </div>
      <div class="mt-10 max-w-2xl mt-6 dark:text-gray-50">
        <p
          class="mt-6"
        >
          Un petit rappel sur les nouveautés offertes par la nouvelle version
        </p>
        <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span class="dark:text-gray-400"><strong class="font-semibold text-gray-900 dark:text-gray-100">
              Tests d'architecture
            </strong> Vous pouvez tester les règles architecturales de votre application avec facilité.</span>
          </li>

          <li class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span class="dark:text-gray-400"><strong class="font-semibold text-gray-900 dark:text-gray-100">
              Rapidité
            </strong> Les nouvelles fonctionnalités de Pest 2.0 incluent une amélioration de la vitesse des tests parallèles allant jusqu'à 60%.</span>
          </li>

          <li class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span class="dark:text-gray-400"><strong class="font-semibold text-gray-900 dark:text-gray-100">
              Nouvelles options
            </strong> un profilage pour identifier les tests les plus lents, une option pour ne faire afficher que les informations des tests en échec, une option pour ne lancer que les tests échoués précédemment... et j'en passe.</span>
          </li>
        </ul>
        <p class="mt-8">
          Pest est un framework de test PHP moderne et élégant, qui se concentre sur la simplicité et la lisibilité du code de test. La version 2.0 de Pest est une mise à jour majeure qui apporte de nombreuses nouvelles fonctionnalités et améliorations pour faciliter encore plus la création et l'exécution de tests.
        </p>
        <p class="mt-8">
          Parmi les grandes nouveautés, les tests d'architectures sont de mise. Ils vont forcer l'usage de pratiques consistantes tout au long de la vie du projet.
        </p>
        <p class="mt-8">
          Imaginons que nous souhaitons forcer l'utilisation des <a href="https://laravel.com/docs/10.x/validation#form-request-validation" class="link" target="_blank">Form Requests</a> dans nos Contrôleurs :
        </p>
        <pre v-highlightjs="archTestCode" class="mt-4"><code class="php"></code></pre>
        <p class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500 dark:text-gray-300">
          <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          Le test passera au rouge dès qu'une requête classique se retrouvera dans un contrôleur
        </p>
        <p class="mt-8">
          De la même manière, on peut éviter l'utilisation de <a href="https://laravel.com/docs/10.x/facades" class="link" target="_blank">Facades</a> dans l'application Laravel avec ce test-ci :
        </p>
        <pre v-highlightjs="facadeNotBeUsedCode" class="mt-4"><code class="artisan"></code></pre>
        <p class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500 dark:text-gray-300">
          <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          Il sera nécessaire d'ignorer certains dossier qui contiennent des facades par défaut
        </p>
        <p class="mt-8">
          Si vous voulez placer un test dans une "liste d'attente" un peu comme une todo. Rien de plus simple :
        </p>
        <pre v-highlightjs="todoCode" class="mt-4"><code class="php"></code></pre>
        <p class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500 dark:text-gray-300">
          <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          Les tests placés en todo seront rendu en bleu sur le terminal et non traités
        </p>
      </div>
      <div class="mt-16 max-w-2xl dark:text-gray-100">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
          Conclusion
        </h2>
        <p class="mt-6">
          En somme, Pest 2.0 est une mise à jour majeure pour ce framework de test PHP populaire, offrant de nouvelles fonctionnalités qui permettent aux développeurs de travailler plus rapidement, plus efficacement et avec une meilleure qualité de code. Pest 2.0 est un choix judicieux pour les développeurs qui cherchent à améliorer leur processus de test et à garantir la qualité de leur code.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const archTestCode = "it('never uses request', function () {\n" +
      "    expect('App\\Http\\Controllers')\n" +
      "        ->not->toUse('Illuminate\\Http\\Request');\n" +
      "});";

  const facadeNotBeUsedCode = "it('never uses facades')\n" +
      "    ->expect('Illuminate\\Support\\Facades')\n" +
      "    ->not->toBeUsed()\n" +
      "    ->ignoring('App\\Providers')\n" +
      "    ->ignoring('App\\Http\\Middleware');"

  const todoCode = "it('can update ebook')->todo();";
</script>
