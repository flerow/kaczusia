<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

/**
 */
class KaczkaController extends AbstractController
{
    /**
     * @var Environment
     */
    private $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    /**
     * @Route(path="/kaczka", methods={"GET"})
     */
    public function getKaczka(Request $request)
    {
        return $this->render('kaczka.html.twig', ['isKaczka' => rand(0,1) == 1]);
    }
}
