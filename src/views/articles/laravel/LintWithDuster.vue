<template>
  <div class="bg-white dark:bg-gray-700 py-32 px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <p class="text-base font-semibold leading-7 text-green-600 space-x-2">
        <span class="inline-flex items-center rounded-full bg-blue-50 py-1.5 px-3 text-xs font-medium text-blue-600">
          PHP
        </span>
        <span class="inline-flex items-center rounded-full bg-yellow-50 py-1.5 px-3 text-xs font-medium text-yellow-600">
          Outils
        </span>
      </p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        Linter son code PHP avec Duster 🧹
      </h1>
      <p class="mt-6 text-xl leading-8 dark:text-gray-50">
        Nous allons ensemble faire un petit tour du propriétaire de la librairie de <span class="font-semibold">Tighten</span>. Nous allons donc partir de zéro et nous intéresser au linting et à ses différentes options comme le <span class="font-semibold">--dirty</span>. Aussi, nous verrons comment greffer à notre workflow d'autres librairies qui seront lancées en même temps que <span class="font-semibold">Duster</span>.
      </p>
        <div class="aspect-w-16 aspect-h-9 mt-6">
          <iframe src="https://www.youtube.com/embed/YNBy_Clv2EA" title="Linter son code PHP" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="rounded" allowfullscreen></iframe>
        </div>
      <div class="mt-10 max-w-2xl mt-6 dark:text-gray-50">
        <p
          class="mt-6"
        >
          Duster permet de détecter et de corriger les erreurs de code, de respecter les normes de codage et de maintenir une base de code propre et lisible. Cette fabuleuse librairie a été développée par
          <a href="https://twitter.com/stauffermatt" class="link" target="_blank">Matt Stauffer</a> et <a href="https://twitter.com/driftingly" class="link" target="_blank">Anthony Clark 🦑</a>.
        </p>
        <p class="mt-6">
          Pour aider les développeurs à comprendre comment utiliser la librairie efficacement, le tutoriel vidéo présente quelques exemples d'erreurs courantes de code que <span class="font-semibold">Duster</span> peut détecter et réparer.
        </p>
        <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span class="dark:text-gray-400"><strong class="font-semibold text-gray-900 dark:text-gray-100">
              4 linters
            </strong> Duster est lui-même construit sur les outils suivant : <span class="font-semibold">TLint</span>, <span class="font-semibold">PHP_CodeSniffer</span>, <span class="font-semibold">PHP CS Fixer</span> et <span class="font-semibold">Pint</span>.</span>
          </li>
          <li class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span class="dark:text-gray-400"><strong class="font-semibold text-gray-900 dark:text-gray-100">
              Linter et fixer
            </strong> Son objectif principal c'est de détecter, corriger et fixer les normes de codage afin que l'équipe de développeurs s'entendent sur la même syntaxe.</span>
          </li>
          <li class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span class="dark:text-gray-400"><strong class="font-semibold text-gray-900 dark:text-gray-100">
              Personnalisation
            </strong> Vous pouvez ajouter les librairies que vous souhaitez à l'exécution de la commande. Mais aussi personnaliser les règles de syntaxe.</span>
          </li>
        </ul>
        <p class="mt-8">
          Ici je vais tenter de donner un contexte textuel sur les différentes options de configuration et indiquer comment exécuter <span class="font-semibold">Duster</span>.
        </p>
        <p class="mt-8">
          En utilisant la commande ci-dessous, nous lançons la vérification de la syntaxe basée sur la configuration des 4 linters :
        </p>
        <pre v-highlightjs="dusterLintCode" class="mt-4"><code class="shell"></code></pre>
        <p class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500 dark:text-gray-300">
          <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          L'affichage en ligne de commande vous montre ce qui ne va pas suivant les règles configurées
        </p>
        <p class="mt-8">
          Si vous êtes d'accord avec ceci, vous pouvez exécuter la commande suivante pour fixer automatiquement les problèmes de syntaxe listés précédemment :
        </p>
        <pre v-highlightjs="dusterFixCode" class="mt-4"><code class="shell"></code></pre>
      </div>
      <div class="mt-16 max-w-2xl dark:text-gray-100">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          L'option --dirty
        </h2>
        <p class="mt-6">
          Il se peut que vous ne souhaitiez pas analyser/fixer la syntaxe sur une partie du code de votre projet. Cela peut être le cas si vous récupérez du code legacy qui ne doit pas être modifié, dans ce cas l'option <span class="font-semibold">--dirty</span> vous permettra d'utiliser le linter uniquement sur le code qui n'a pas été encore commit.
        </p>
        <pre v-highlightjs="dusterLintDirtyCode" class="mt-4"><code class="shell"></code></pre>
      </div>
      <div class="mt-16 max-w-2xl dark:text-gray-100">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Ajouter l'exécution d'une autre librairie au workflow de <span class="font-semibold">Duster</span>
        </h2>
        <p class="mt-6">
          Si vous souhaitez greffer le lancement d'une autre commande à votre linter, sachez que cela est tout à fait possible. Imaginons que vous souhaitiez ajouter l'analyse statique via
          <a href="https://github.com/nunomaduro/larastan" class="link" target="_blank">Larastan</a>, il vous suffit de créer un fichier <span class="font-semibold">duster.json</span> à la racine de votre projet et d'y ajouter la configuration suivante :
        </p>
        <pre v-highlightjs="dusterJsonCode" class="mt-4"><code class="json"></code></pre>
        <p class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500 dark:text-gray-300">
          <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          Maintenant, la commande de <span class="font-semibold">Phpstan</span> se lancera automatiquement à la suite des 4 linters
        </p>
      </div>
      <div class="mt-16 max-w-2xl dark:text-gray-100">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Personnaliser Pint
        </h2>
        <p class="mt-6">
          La configuration par défaut et les différents presets ont une opinion sur la manière d'écrire le code qui ne vous conviennent par nécessairement, vous êtes bien évidemment libre de personnaliser les règles. Si vous désirez modifier les règles de
          <a href="https://laravel.com/docs/10.x/pint" class="link" target="_blank">Laravel Pint</a>, rien de plus simple, il suffit de créer un fichier <span class="font-semibold">pint.json</span> à la racine de votre projet et de vous inspirer des règles de départ :
        </p>
        <pre v-highlightjs="pintJsonCode" class="mt-4"><code class="json"></code></pre>
        <p class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500 dark:text-gray-300">
          <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          Vous êtes ainsi libre de modifier le preset et règles à votre convenance
        </p>
      </div>
      <div class="mt-16 max-w-2xl dark:text-gray-100">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Conclusion
        </h2>
        <p class="mt-6">
          En somme, <span class="font-semibold">Duster</span> est un linter pour PHP qui embarque 4 dépendances afin de réparer automatiquement les erreurs de syntaxe.
        </p>
        <p class="mt-6">
          Vous pourrez aisément interpréter les résultats de l'analyse et personnaliser les règles pré-établies. Cela aidera les développeurs PHP à maintenir leur code propre, lisible et de haute qualité.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const dusterLintCode = "./vendor/bin/duster lint";
  const dusterFixCode = "./vendor/bin/duster fix";

  const dusterLintDirtyCode = "./vendor/bin/duster lint --dirty";

  const dusterJsonCode = "{\n" +
      "    \"scripts\": {\n" +
      "        \"lint\": {\n" +
      "            \"phpstan\": [\"./vendor/bin/phpstan\", \"analyse\"]\n" +
      "        }\n" +
      "    }\n" +
      "}";

  const pintJsonCode = "{\n" +
      "    \"preset\": \"laravel\",\n" +
      "    \"rules\": {\n" +
      "        \"blank_line_between_import_groups\": true,\n" +
      "        \"concat_space\": {\n" +
      "            \"spacing\": \"one\"\n" +
      "        },\n" +
      "        \"class_attributes_separation\": {\n" +
      "            \"elements\": {\n" +
      "                \"method\": \"one\"\n" +
      "            }\n" +
      "        },\n" +
      "        \"curly_braces_position\": {\n" +
      "            \"control_structures_opening_brace\": \"same_line\",\n" +
      "            \"functions_opening_brace\": \"next_line_unless_newline_at_signature_end\",\n" +
      "            \"anonymous_functions_opening_brace\": \"same_line\",\n" +
      "            \"classes_opening_brace\": \"next_line_unless_newline_at_signature_end\",\n" +
      "            \"anonymous_classes_opening_brace\": \"next_line_unless_newline_at_signature_end\",\n" +
      "            \"allow_single_line_empty_anonymous_classes\": true,\n" +
      "            \"allow_single_line_anonymous_functions\": false\n" +
      "        },\n" +
      "        \"explicit_string_variable\": true,\n" +
      "        \"global_namespace_import\": {\n" +
      "            \"import_classes\": true,\n" +
      "            \"import_constants\": true,\n" +
      "            \"import_functions\": true\n" +
      "        },\n" +
      "        \"new_with_braces\": {\n" +
      "            \"named_class\": false,\n" +
      "            \"anonymous_class\": false\n" +
      "        },\n" +
      "        \"ordered_imports\": {\n" +
      "            \"sort_algorithm\": \"alpha\",\n" +
      "            \"imports_order\": [\n" +
      "                \"const\",\n" +
      "                \"class\",\n" +
      "                \"function\"\n" +
      "            ]\n" +
      "        },\n" +
      "        \"php_unit_test_annotation\": {\n" +
      "            \"style\": \"annotation\"\n" +
      "        },\n" +
      "        \"simple_to_complex_string_variable\": true\n" +
      "    }\n" +
      "}";
</script>
