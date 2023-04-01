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
        Tester les uploads de fichiers 📁
      </h1>
      <p class="mt-6 text-xl leading-8 dark:text-gray-50">
        Dans cet article, nous allons vous guider à travers les étapes pour créer un modèle <span class="font-semibold">Media</span> et une migration associée, ainsi qu'une requête d'upload de fichiers pour télécharger des fichiers sur votre application <span class="font-semibold">Laravel</span>. Nous allons également découvrir le framework de test Pest pour vérifier le bon fonctionnement de votre application.
      </p>
        <div class="aspect-w-16 aspect-h-9 mt-6">
          <iframe src="https://www.youtube.com/embed/j-_WrFxbpnQ" title="Tutoriel Laravel : Tester les uploads de fichiers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="rounded" allowfullscreen></iframe>
        </div>
      <div class="mt-10 max-w-2xl mt-6 dark:text-gray-50">
        <p
          class="mt-6"
        >
          Tester l'upload de fichiers avec Laravel présente plusieurs avantages
        </p>
        <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span class="dark:text-gray-400"><strong class="font-semibold text-gray-900 dark:text-gray-100">
              Qualité
            </strong> Vérifier le fonctionnement de l'application : en testant l'upload de fichiers, vous pouvez vous assurer que l'application fonctionne correctement et que les fichiers sont téléchargés et stockés correctement.</span>
          </li>

          <li class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span class="dark:text-gray-400"><strong class="font-semibold text-gray-900 dark:text-gray-100">
              Éviter les erreurs
            </strong> En détectant les erreurs dès le début, vous pouvez les corriger plus rapidement et éviter des problèmes plus graves à l'avenir.</span>
          </li>

          <li class="flex gap-x-3">
            <svg class="mt-1 h-5 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            <span class="dark:text-gray-400"><strong class="font-semibold text-gray-900 dark:text-gray-100">
              Gain de temps
            </strong> En testant l'upload de fichiers, vous pouvez réduire le temps de débogage et de correction des erreurs, ce qui vous permet de vous concentrer sur d'autres aspects de votre application.</span>
          </li>
        </ul>

        <p class="mt-8">
          Pour commencer, nous allons créer notre modèle <span class="font-semibold">Media</span> avec sa migration, ses
          <a href="https://laravel.com/docs/10.x/validation#form-request-validation" class="link">form requests</a> ainsi qu'un contrôleur invokable. Dans le fichier de migration nous définirons les champs que nous souhaitons stocker pour chaque fichier téléchargé. Dans notre exemple, nous stockerons le nom de l'image, le chemin vers le fichier sur le disque, la taille de l'image et son type de fichier (MIME).
        </p>

        <p class="mt-8">
          Maintenant que nous avons créé notre modèle Media et notre migration, nous allons créer une requête d'upload de fichiers pour permettre à l'utilisateur de télécharger des fichiers sur notre application web. Nous créerons une <span class="font-semibold">MediaRequest</span> pour valider les fichiers téléchargés et les stocker dans notre base de données. Nous pouvons écrire le code dans notre <span class="font-semibold">UploadController</span> :
        </p>
        <pre v-highlightjs="uploadControllerCode" class="mt-4"><code class="php"></code></pre>

        <p class="mt-8">
          Pour vérifier le bon fonctionnement de notre application, nous allons utiliser le <a href="https://pestphp.com/" class="link" target="_blank">framework de test Pest</a>. Nous explorerons les chemins de code "shiny path" et "not shiny path" pour valider que notre application gère correctement les erreurs lors de l'upload de fichiers. Nous utiliserons les assertions et les matchers de Pest pour valider que les résultats des tests correspondent à nos attentes.
        </p>
        <pre v-highlightjs="canUploadFileCode" class="mt-4"><code class="php"></code></pre>
        <p class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500 dark:text-gray-300">
          <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          La méthode <a href="https://laravel.com/docs/10.x/filesystem#testing" class="link" target="_blank">assertMissing()</a> peut être utilisé pour le "sad path"
        </p>
      </div>
      <div class="mt-16 max-w-2xl dark:text-gray-100">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Conclusion
        </h2>
        <p class="mt-6">
          À la fin de ce tutoriel, vous aurez acquis une meilleure compréhension de la création de modèles, de migrations et de validateurs dans Laravel, ainsi que de l'utilisation de Pest pour tester votre application web. Vous serez prêt à intégrer cette fonctionnalité d'upload de fichiers dans vos futurs projets Laravel.
        </p>
        <p class="mt-6">
          Pour découvrir un peu plus en profondeur l'upload de fichiers, n'hésitez pas à lire <a href="https://laravel-news.com/uploading-files-laravel" class="link" target="_blank">Learn how to upload files in Laravel like a Pro</a> de
          <a href="https://www.juststeveking.uk/" class="link" target="_blank">Steve McDougall</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const uploadControllerCode = "<?php\n" +
      "\n" +
      "declare(strict_types=1);\n" +
      "\n" +
      "namespace App\\Http\\Controllers;\n" +
      "\n" +
      "use App\\Http\\Requests\\MediaRequest;\n" +
      "use App\\Models\\Media;\n" +
      "use Illuminate\\Http\\Response;\n" +
      "use Illuminate\\Http\\UploadedFile;\n" +
      "\n" +
      "final class UploadController extends Controller\n" +
      "{\n" +
      "    public function __invoke(\n" +
      "        MediaRequest $request,\n" +
      "    ): Response {\n" +
      "        /**\n" +
      "         * @var UploadedFile $file\n" +
      "         */\n" +
      "        $file = $request->file('file');\n" +
      "\n" +
      "        $path = $file->storeAs(\n" +
      "            path: 'contracts',\n" +
      "            name: $file->hashName(),\n" +
      "        );\n" +
      "\n" +
      "        Media::query()->create(\n" +
      "            attributes: [\n" +
      "                'name' => $file->hashName(),\n" +
      "                'file_name' => $file->getClientOriginalName(),\n" +
      "                'mime_type' => $file->getClientMimeType(),\n" +
      "                'path' => $path,\n" +
      "                'size' => $file->getSize(),\n" +
      "            ],\n" +
      "        );\n" +
      "\n" +
      "        return response()->noContent();\n" +
      "    }\n" +
      "}"

  const canUploadFileCode = "<?php\n" +
      "\n" +
      "it('can upload a media file', function () {\n" +
      "    Storage::fake();\n" +
      "\n" +
      "    \\Pest\\Laravel\\post(\n" +
      "        uri: route('upload'),\n" +
      "        data: [\n" +
      "            'media' => $file = \\Illuminate\\Http\\UploadedFile::fake()\n" +
      "                ->create('document.pdf', 1 * 1024),\n" +
      "        ],\n" +
      "    )\n" +
      "        ->assertSessionHasNoErrors();\n" +
      "\n" +
      "    Storage::disk()->assertExists('contracts' . DIRECTORY_SEPARATOR . $file->hashName());\n" +
      "});";
</script>
