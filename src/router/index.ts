import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from "@/views/WelcomeView.vue";
import ArticleView from "@/views/ArticleView.vue";
import NProgress from "nprogress";

const LaravelSubQuery = () => import('../views/articles/laravel/LaravelSubQuery.vue');
const TestingLaravelWithPestPhp = () => import('../views/articles/laravel/TestingLaravelWithPestPhp.vue');
const LintWithDuster = () => import('../views/articles/laravel/LintWithDuster.vue');
const LearnPest2 = () => import('../views/articles/laravel/LearnPest2.vue');
const LaravelUploadFilesPestPhp = () => import('../views/articles/laravel/LaravelUploadFilesPestPhp.vue');

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView,
    meta: {
      title: 'Nord Coders | Apprendre le développement web | Apprendre Laravel, PHP, JavaScript et Vue',
      description: 'Apprendre le framework PHP Laravel à travers des projets concrets. Du code propre, efficace et qui respecte les bonnes pratiques.',
    }
  },
  {
    path: '/articles',
    component: ArticleView,
    meta: {
      title: 'Nord Coders | Articles',
      description: 'Tous les articles sur Laravel ou Vue.',
    }
  },
  {
    path: '/articles/sous-requete-laravel',
    component: LaravelSubQuery,
    meta: {
      title: 'Nord Coders | Articles | Sous-requêtes avec Laravel et Eloquent',
      description: 'Comment créer des sous-requêtes avec Laravel et Eloquent.',
    }
  },
  {
    path: '/articles/tester-son-application-laravel-avec-pest-php',
    component: TestingLaravelWithPestPhp,
    meta: {
      title: 'Nord Coders | Articles | Tester son application Laravel avec PestPHP',
      description: 'Comment créer tester son application Laravel avec le framework de test PestPHP.',
    }
  },
  {
    path: '/articles/linter-son-code-php-laravel-avec-duster',
    component: LintWithDuster,
    meta: {
      title: 'Nord Coders | Articles | Linter son code PHP et Laravel',
      description: 'Comment linter son code dans une application PHP.',
    }
  },
  {
    path: '/articles/decouvrir-pest-2',
    component: LearnPest2,
    meta: {
      title: 'Nord Coders | Articles | Les nouveautés Pest 2.0',
      description: 'Découvrez les nouveautés du framework de test Pest 2.0.',
    }
  },
  {
    path: '/articles/upload-fichiers-laravel-test',
    component: LaravelUploadFilesPestPhp,
    meta: {
      title: 'Nord Coders | Articles | Tester l\'upload de fichiers dans votre application Laravel avec PestPHP',
      description: 'Découvrez comment tester l\'upload de fichiers dans votre application Laravel en créant un modèle Media, une migration et une MediaRequest pour stocker les fichiers. Utilisez le framework de test PestPHP pour vérifier le fonctionnement de votre application, testez le chemin de code qui fonctionne et celui qui ne fonctionne pas en utilisant des images valides et incorrectes. Apprenez à utiliser les assertions et les matchers de PestPHP pour valider les résultats des tests. Ce guide pas à pas vous permettra d\'intégrer facilement la fonctionnalité d\'upload de fichiers dans vos futurs projets Laravel.',
    }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  linkActiveClass: 'text-green-500 dark:text-sky-500',
});

router.beforeEach((to, from, next) => {
  NProgress.start();

  document.title = `${to.meta.title}`;

  const description: string = `${to.meta.description}`;
  (document.querySelector('meta[name="description"]') as HTMLMetaElement).setAttribute('content', description);

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router
