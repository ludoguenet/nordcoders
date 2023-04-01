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
        Tester son application avec Pest PHP
      </h1>
      <p class="mt-6 text-xl leading-8 dark:text-gray-50">
        PEST est un framework de test PHP développé par <a href="https://github.com/nunomaduro" class="link" target="_blank">Nuno Maduro</a>, qui se concentre sur la simplicité et la clarté. Il est conçu pour être facile à utiliser et à comprendre, même pour les débutants en programmation.
      </p>
        <div class="aspect-w-16 aspect-h-9 mt-6">
          <iframe src="https://www.youtube.com/embed/WYC_H9lR7Rw" title="Tester son application avec Pest PHP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="rounded" allowfullscreen></iframe>
        </div>
      <div class="mt-10 max-w-2xl mt-6 dark:text-gray-50">
        <p
          class="mt-6"
        >
          Il utilise une syntaxe très simple et expressive pour écrire des tests, ce qui permet de créer des tests plus rapidement et plus facilement qu'avec d'autres alternatives.
        </p>
        <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span class="dark:text-gray-400"><strong class="font-semibold text-gray-900 dark:text-gray-100">
              Simplicité
            </strong> Syntaxe simple et expressive : PEST offre une syntaxe facile à lire et à comprendre pour écrire des tests, ce qui permet aux développeurs de créer des tests avec plus d'aisance.</span>
          </li>

          <li class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span class="dark:text-gray-400"><strong class="font-semibold text-gray-900 dark:text-gray-100">
              PHPUnit sous le capot
            </strong> Intégration transparente avec PHPUnit : PEST peut être utilisé avec PHPUnit sans nécessiter de configuration supplémentaire, ce qui permet aux développeurs de profiter de toutes les fonctionnalités de PHPUnit tout en bénéficiant de la rapidité de mise en place de PEST.</span>
          </li>

          <li class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span class="dark:text-gray-400"><strong class="font-semibold text-gray-900 dark:text-gray-100">
              Soyons clair
            </strong> Documentation claire et concise : PEST est livré avec une documentation claire et concise qui explique les fonctionnalités du framework de manière simple et facile à comprendre, ce qui facilite l'apprentissage et l'utilisation de PEST.</span>
          </li>
        </ul>
        <p class="mt-8">
          Dans ce tutoriel, nous allons explorer l'utilisation de PEST PHP pour tester la création d'un livre sur Laravel. Nous allons créer un modèle de livre et une migration de base de données pour la table <span class="font-semibold">books</span>.
        </p>
        <p class="mt-8">
          Ensuite, nous allons écrire notre premier test pour vérifier que la création d'un livre fonctionne comme attendu. Nous utiliserons également le trait <span class="font-semibold">RefreshDatabase</span> de Laravel pour réinitialiser la base de données avant chaque test.
        </p>
        <p class="mt-8">
          Bref, ce sera une courte introduction qui vous montrera comment utiliser PEST PHP pour écrire le premier d'une longue série de tests unitaires et d'intégration.
        </p>
        <p class="mt-8">
          Tout d'abord, vous devez créer le modèle Book en utilisant la commande artisan de Laravel :
        </p>
        <pre v-highlightjs="createBookModelCode" class="mt-4"><code class="shell"></code></pre>
        <p class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500 dark:text-gray-300">
          <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          Cela créera un nouveau fichier de modèle Book.php ainsi qu'une migration
        </p>
        <p class="mt-8">
          Puis on créé un nouveau livre en utilisant la factory de modèle Book avec des valeurs de titre, d'auteur et de description spécifiées. Enfin, il utilise la fonction expect() de PEST pour vérifier que les propriétés du livre créé correspondent aux valeurs encodées:
        </p>
        <pre v-highlightjs="canCreateABookTestCode" class="mt-4"><code class="artisan"></code></pre>
        <p class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500 dark:text-gray-300">
          <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          Ce test utilise le trait RefreshDatabase pour réinitialiser la base de données avant chaque test
        </p>
        <p class="mt-8">
          Enfin la commande suivante permettra d'exécuter les tests :
        </p>
        <pre v-highlightjs="runPestPhpCode" class="mt-4"><code class="shell"></code></pre>
      </div>
      <div class="mt-16 max-w-2xl dark:text-gray-100">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Conclusion
        </h2>
        <p class="mt-6">
          En résumé, PEST offre une syntaxe simple et expressive, une intégration transparente avec PHPUnit, des fonctionnalités de couverture de code, des tests de contexte, une fonctionnalité de "watcher", une documentation claire et concise, une communauté active de développeurs et une rapidité d'exécution des tests.
        </p>
        <p class="mt-6">
          Ces avantages peuvent aider à améliorer l'efficacité et la qualité des tests, tout en réduisant le temps et les efforts nécessaires pour les écrire.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const createBookModelCode = "php artisan make:model Book -m";

  const canCreateABookTestCode = "<?php\n" +
      "\n" +
      "use App\\Models\\Book;\n" +
      "use Illuminate\\Foundation\\Testing\\RefreshDatabase;\n" +
      "\n" +
      "it('can create a book', function () {\n" +
      "    // Créer un nouveau livre en utilisant la factory de modèle Book\n" +
      "    $book = Book::factory()->create([\n" +
      "        'title' => 'Harry Potter et la Chambre des secrets',\n" +
      "        'author' => 'J. K. Rowling',\n" +
      "        'description' => 'Harry Potter est contraint de passer la soirée dans sa chambre.'\n" +
      "    ]);\n" +
      "\n" +
      "    // Vérifier que les propriétés du livre créé correspondent aux valeurs spécifiées\n" +
      "    expect($book->title)->toEqual('Harry Potter et la Chambre des secrets');\n" +
      "    expect($book->author)->toEqual('J. K. Rowling');\n" +
      "    expect($book->description)->toEqual('Harry Potter est contraint de passer la soirée dans sa chambre.');\n" +
      "})->uses(RefreshDatabase::class);";

  const runPestPhpCode = "./vendor/bin/pest";
</script>
