<script setup lang="ts">
import { github_url, linkedIn_url, whatsapp_url } from "~/settings";
</script>

<template>
    <div
        class="flex flex-col border-r-1 p-10 bg-white-soft shadow-[4px_0_20px_rgba(0,0,0,0.05)]"
    >
        <nav class="flex flex-col justify-between items-start gap-y-20 flex-2">
            <NuxtImg
                src="/img/user-placeholder.jpg"
                alt="User placeholder"
                width="250"
                height="250"
                preload
                format="webp"
                quality="80"
                class="mix-blend-multiply"
            />

            <ul
                class="flex flex-col gap-4 text-title uppercase tracking-ultra-wider"
            >
                <li>Sobre</li>
                <li>Stacks</li>
                <li>Experiência</li>
                <li>Projetos</li>
                <li>Contato</li>
                
            </ul>

            <div class="flex flex-row justify-around items-start gap-x-10">
                <a :href="linkedIn_url" target="_blank"
                    ><Icon
                        name="uil:linkedin"
                        style="color: oklch(0.37 0.01 285.8)"
                        target="_blank"
                        size="48"
                /></a>
                <a :href="github_url" target="_blank"
                    ><Icon
                        name="uil:github"
                        style="color: oklch(0.37 0.01 285.8)"
                        size="48"
                        target="_blank"
                /></a>
                <a :href="whatsapp_url" target="_blank"
                    ><Icon
                        name="uil:whatsapp"
                        style="color: oklch(0.37 0.01 285.8)"
                        size="48"
                /></a>
            </div>
        </nav>
    </div>
</template>
