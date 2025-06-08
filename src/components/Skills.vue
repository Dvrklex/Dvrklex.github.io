<template>
   <main data-aos="zoom-in">
        <section class="skills">
            <h2>Habilidades</h2>
            <hr>
            <h3>Lenguajes y Tecnolog&iacute;as</h3>
            <div class="skills-grid">
                <div class="skill-card" v-for="(skill, index) in tecnologies" :key="index">
                <i :class="skill.icon"></i><br>
                <span>{{ skill.name }}</span>
                </div>
            </div>
            <h3>Frameworks y Librer&iacute;as</h3>
            <div class="skills-grid">
                <div class="skill-card" v-for="(skill, index) in frameworks" :key="index">
                <i :class="skill.icon"></i><br>
                <span>{{ skill.name }}</span>
                </div>
            </div>
            <h3>Otras Herramientas</h3>
            <div class="skills-grid">
                <div class="skill-card" v-for="(skill, index) in others" :key="index">
                <i :class="skill.icon"></i><br>
                <span>{{ skill.name }}</span>
                </div>
            </div>
        </section>
            
            
        
   </main>
</template>
<script setup>
    const tecnologies = [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'PostgreSQL', icon: 'fas fa-database' },
        { name: 'MySQL', icon: 'fas fa-database' },
    ]
    const frameworks = [
        { name: 'Django', icon: 'fab fa-python'},
        { name: 'Flask', icon: 'fab fa-python'},
        { name: 'FastAPI', icon: 'fab fa-python'},
        { name: 'SQLAlchemy', icon: 'fab fa-python'},
        { name: 'Sequelize', icon: 'fab fa-node'},
        { name: 'Express', icon: 'fa fa-code'},
        { name: 'Celery', icon: 'fa fa-code'},
        { name: 'Selenium', icon: 'fa fa-code'},
        { name: 'WebSocket', icon: 'fa fa-code'},
        { name: 'SocketIO', icon: 'fa fa-code'}
    ]
    const others = [
        { name: 'Visual Studio Code', icon: 'fa fa-keyboard'},
        { name: 'Adobe XD', icon: 'fa fa-keyboard'},
        { name: 'DBeaver', icon: 'fas fa-database'},
        { name: 'Git', icon: 'fab fa-git'},
        { name: 'Docker', icon: 'fab fa-docker'}
    ]
</script>

<style scoped>
    main {
        max-width: 1000px;
        margin: auto;
        padding: 20px;
    }
    .skills {
        background-color: white;
        padding: 25px;
        margin-top: 25px;
        border-radius: 12px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
        animation: fadeInUp 1.2s ease;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }

    h2 {
        text-align: center;
        color: #c9a227;
        font-size: 1.8rem;
        margin-bottom: 20px;
    }

    .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }

    .skill-card {
        background: #f9f9f9;
        border-radius: 10px;
        padding: 15px;
        text-align: center;
        box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .skill-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0,0,0,0.3);
    }

    .skill-card i {
        font-size: 2rem;
        margin-bottom: 8px;
        color: #c9a227;
    }

</style>
