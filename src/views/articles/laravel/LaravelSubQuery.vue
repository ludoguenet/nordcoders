<template>
  <div class="bg-white dark:bg-gray-700 py-32 px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <p class="text-base font-semibold leading-7 text-green-600 space-x-2">
        <span class="inline-flex items-center rounded-full bg-red-50 py-1.5 px-3 text-xs font-medium text-red-600">
          Laravel
        </span>
        <span class="inline-flex items-center rounded-full bg-orange-50 py-1.5 px-3 text-xs font-medium text-orange-600">
          Eloquent
        </span>
      </p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        Les sous-requêtes avec Eloquent
      </h1>
      <p class="mt-6 text-xl leading-8 dark:text-gray-50">
        Eloquent est un ORM (Object Relational Mapper) fabuleux. Il nous permet de récupérer nos données de façon optimisée et avec beaucoup de simplicité. Il faut cependant maîtriser les bases du langage SQL pour pouvoir en profiter pleinement. Passer cette étape, sélectionner le jeu de données souhaité reste enfantin.
      </p>
        <div class="aspect-w-16 aspect-h-9 mt-6">
          <iframe src="https://www.youtube.com/embed/PfvH5piT3mU" title="Tutoriel Laravel : Les sous-requêtes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="rounded" allowfullscreen></iframe>
        </div>
      <div class="mt-10 max-w-2xl mt-6 dark:text-gray-50">
        <p
          class="mt-6"
        >
          Les sous-requêtes vous permettent d'exécuter des requêtes imbriquées, aussi appelées <span class="font-semibold">nested queries</span> ou <span class="font-semibold">subqueries</span> dans votre requête principale. Cela vous permet de greffer à votre requête initiale des lignes de données lorsqu'il n'est tout simplement pas possible de le faire au travers des relations Eloquent.
        </p>
        <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span class="dark:text-gray-400"><strong class="font-semibold text-gray-900 dark:text-gray-100">
              Clauses SQL
            </strong> Vous avez la possibilité de les utiliser également dans chacune des clauses de base de données. Que ce soit un <span class="font-semibold">where</span>, <span class="font-semibold">where in</span>, <span class="font-semibold">order by</span>, etc.</span>
          </li>
          <li class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span class="dark:text-gray-400"><strong class="font-semibold text-gray-900 dark:text-gray-100">
              Query Builder
            </strong> Évidemment, vous pouvez utiliser les sous-requêtes avec le Query Builder de Laravel.</span>
          </li>
        </ul>
        <p class="mt-8">
          On remercie <a href="https://reinink.ca/" class="link" target="_blank">Jonathan Reinink</a> pour cette superbe <a href="https://github.com/laravel/framework/pull/29567" class="link" target="_blank">Pull Request</a> qui a ajouté le support des sous-requêtes pour les <span class="font-semibold">select()</span> et <span class="font-semibold">addSelect()</span>. Pour pouvoir illustrer cette merveilleuse fonctionnalité, prenons un exemple aussi simple que classique : les livres!
        </p>
        <p class="mt-8">
          Nous avons donc 2 tables : <span class="font-semibold">authors</span> et <span class="font-semibold">books</span>. Un auteur possédant plusieurs livres et un livre n'appartenant qu'à un seul auteur, nous avons une relation
          <a href="https://laravel.com/docs/10.x/eloquent-relationships#one-to-many" class="link" target="_blank">One To Many</a>. La clé étrangère <span class="font-semibold">author_id</span> se retrouve donc dans la table <span class="font-semibold">books</span>.
        </p>
        <p class="mt-8">
          La requête suivante récupère tous les auteurs avec le nombre de livres le plus vendu :
        </p>
        <pre v-highlightjs="bestSellingBookCode" class="mt-4"><code class="php"></code></pre>
        <p class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500 dark:text-gray-300">
          <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          Le champ best_selling_book de la table books contient un entier qui représente le nombre de ventes
        </p>
        <p class="mt-8">
          La requête suivante récupère tous les auteurs avec le nom de leur livre le plus vendu :
        </p>
        <pre v-highlightjs="bestSellingBookNameCode" class="mt-4"><code class="php"></code></pre>
        <p class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500 dark:text-gray-300">
          <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          On peut éviter le whereRaw() en utilisant un orderByDesc() sur le champ selling_count comme dans le tri plus bas
        </p>
      </div>
      <div class="mt-16 max-w-2xl dark:text-gray-100">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Ordonner colonnes de relation dans Laravel
        </h2>
        <p class="mt-6">
          Nous allons maintenant ordonner les requêtes de base de données par la valeur (colonne) d'une relation Eloquent. Par exemple, si nous souhaitons classer notre liste de livres par le nom de leur catégorie. La table <span class="font-semibold">categories</span> est une table distincte de notre table <span class="font-semibold">books</span>.
        </p>
        <p class="mt-8">
          Sans oublier l'<a href="https://laravel.com/docs/10.x/eloquent-relationships#eager-loading" class="link" target="_blank">Eager Loading</a>, ici nous récupérons les livres triés par nom de leur catégorie respective :
        </p>
        <pre v-highlightjs="orderByCode" class="mt-4"><code class="php"></code></pre>
        <p class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500 dark:text-gray-300">
          <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          Ici nous avons une relation <a href="https://laravel.com/docs/10.x/eloquent-relationships#one-to-many-inverse" class="link" target="_blank">One To Many</a> donc la clé étrangère se trouve dans la table books
        </p>
      </div>
      <div class="mt-16 max-w-2xl dark:text-gray-100">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Conclusion
        </h2>
        <p class="mt-6">
          Les sous-requêtes avec Eloquent nécessitent des bases solides en SQL mais permettent de résoudre un bon nombre de problématiques. N'hésitez pas à utiliser de outils de debug comme
          <a href="https://github.com/barryvdh/laravel-debugbar" class="link" target="_blank">Debugbar for Laravel</a> pour mesurer le temps d'exécution de vos requêtes.
        </p>
        <p class="mt-6">
          Pour aller plus loin, n'hésitez pas à jeter un coup d'oeil aux <a href="https://laravel.com/docs/10.x/queries#subquery-joins" class="link" target="_blank">Subquery Joins</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const bestSellingBookCode = "return Author::query()\n" +
      "     ->addSelect(['best_selling_book' => Book::selectRaw('MAX(selling_count)')\n" +
      "     ->whereColumn('author_id', 'authors.id')\n" +
      "])->get();";

  const bestSellingBookNameCode = "return User::query()\n" +
      "     ->addSelect([\n" +
      "         'best_selling_name' => Book::query()\n" +
      "           ->select('name')\n" +
      "           ->whereColumn('user_id', 'users.id')\n" +
      "           ->whereRaw('selling_count = (SELECT MAX(selling_count) FROM books WHERE books.user_id = users.id)')\n" +
      "])->get();";

  const orderByCode = "return Book::query()\n" +
      "     ->with('category')\n" +
      "     ->orderByDesc(Category::query()\n" +
      "       ->select('name')\n" +
      "       ->whereColumn('categories.id', 'books.category_id')\n" +
      ")->get();";
</script>
