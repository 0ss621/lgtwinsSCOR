const players = [
    {
        name: '박해민',
        image: 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Ft%2Fe0a0d16a-160c-4bb4-8b50-a88246d69f75.png', 
        salary: 600000000,
        obp: 0.326,
        risp: 0.235,
        stats: {
            avg: 0.262,
            rbi: 36,
            war: 0.36,
            runs: 82,
            ops: 0.671,
            slg: 0.345,
            obp: 0.326,
            risp: 0.235,
            wRC: 77.5,
            position: '외야수'
        }
    },
    {
        name: '홍창기',
        image: 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Ft%2F603385fb-a69a-49d5-96a4-6402c78eba1b.png',
        salary: 510000000,
        obp: 0.434,
        risp: 0.360,
        stats: {
            avg: 0.313,
            rbi: 44,
            war: 1.97,
            runs: 102,
            slg: 0.383,
            obp: 0.434,
            ops: 0.817,
            risp: 0.360,
            wRC: 128.6,
            position: '외야수'
        }
    },
    {
        name: '신민재',
        image: 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Ft%2F72e5fa0a-8b5f-46da-bd7e-cb4237ab5ad1.png',
        salary: 115000000,
        obp: 0.380,
        risp: 0.306,
        stats: {
            avg: 0.285,
            rbi: 27,
            war: 1.51,
            runs: 74,
            slg: 0.327,
            obp: 0.380,
            ops: 0.707,
            risp: 0.306,
            wRC: 96.9,
            position: '내야수'
        }
    },
    {
        name: '문보경',
        image: 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Ft%2F112cc356-f3e0-41ee-82e4-e27243f4b55f.png',
        salary: 300000000,
        obp: 0.358,
        risp: 0.256,
        stats: {
            avg: 0.287,
            rbi: 50,
            war: 1.41,
            runs: 90,
            slg: 0.465,
            obp: 0.358,
            ops: 0.823,
            risp: 0.256,
            wRC: 113.9,
            position: '내야수'
        }
    },
    {
        name: '오지환',
        image: 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Ft%2F7fab966c-130c-4b7e-9666-3b0c10189919.png',
        obp: 0.355,
        risp: 0.222,
        stats: {
            avg: 0.251,
            rbi: 20,
            war: 1.11,
            runs: 46,
            slg: 0.380,
            obp: 0.355,
            ops: 0.735,
            risp: 0.222,
            wRC: 102.7,
            position: '내야수'
        }
    },
    {
        name: '김현수',
        image: 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Ft%2Fcd24b507-8b76-44b1-9463-346b3feee93a.png',
        salary: 2000000000,
        obp: 0.349,
        stats: {
            avg: 0.292,
            rbi: 47,
            war: 1.03,
            runs: 98,
            slg: 0.411,
            obp: 0.349,
            ops: 0.760,
            wRC: 100.1,
            position: '외야수'
        }
    },
    {
        name: '김범석',
        image: 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Ft%2F09c3e5dd-b004-4847-9968-ed916e16d4aa.png',
        salary: 33000000,
        obp: 0.351,
        risp: 0.243,
        stats: {
            avg: 0.283,
            rbi: 22,
            war: 0.56,
            runs: 34,
            slg: 0.442,
            obp: 0.351,
            ops: 0.793,
            risp: 0.243,
            wRC: 105.1,
            position: '포수'
        }
    },
    {
        name: '구본혁',
        image: 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Ft%2Fc0f146e8-39a0-4b8c-b82b-21425d8207df.png',
        salary: 70000000,
        obp: 0.333,
        risp: 0.286,
        stats: {
            avg: 0.267,
            rbi: 33,
            war: 0.47,
            runs: 60,
            slg: 0.338,
            obp: 0.333,
            ops: 0.671,
            risp: 0.286,
            wRC: 83.1,
            position: '내야수'
        }
    },
    {
        name: '문성주',
        image: 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Ft%2F97c6ef71-5cd8-494b-a7a3-aba86dba11c6.png',
        salary: 200000000,
        obp: 0.425,
        risp: 0.400,
        stats: {
            avg: 0.322,
            rbi: 46,
            war: 2.50,
            runs: 88,
            slg: 0.396,
            obp: 0.425,
            ops: 0.821,
            risp: 0.400,
            wRC: 126.9,
            position: '외야수'
        }
    },
    {
        name: '박동원',
        image: 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Ft%2Faf516ae8-99cd-4ed2-b4c5-15fb5b4474e5.png',
        salary: 2500000000,
        obp: 0.368,
        risp: 0.296,
        stats: {
            avg: 0.274,
            rbi: 50,
            war: 2.26,
            runs: 71,
            slg: 0.479,
            obp: 0.368,
            ops: 0.847,
            risp: 0.296,
            wRC: 123.0,
            position: '포수'
        }
    },
    {
        name: '오스틴 딘',
        image: 'https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Ft%2F2d6ef3f0-f250-4d2f-a95d-5c73e52699bc.png',
        salary: 1105000000,
        obp: 0.364,
        risp: 0.282,
        stats: {
            avg: 0.295,
            rbi: 72,
            war: 2.61,
            runs: 100,
            slg: 0.525,
            obp: 0.364,
            ops: 0.889,
            risp: 0.282,
            wRC: 128.1,
            position: '내야수'
        }
    }
];

const container = document.querySelector('.card-container');

// 연봉 대비 출루율 * 득점권 타율 계산
players.forEach(player => {
    player.obpRispPerSalary = (player.obp * player.risp) / player.salary;
});

// 연봉 대비 출루율 * 득점권 타율이 높은 순으로 정렬
players.sort((a, b) => b.obpRispPerSalary - a.obpRispPerSalary);

// 카드를 생성하여 화면에 표시
players.forEach(player => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = player.image;
    card.appendChild(img);

    const title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = player.name;
    card.appendChild(title);

    const details = document.createElement('div');
    details.className = 'card-details';
    details.innerHTML = `
        <p>타율: ${player.stats.avg}</p>
        <p>타점: ${player.stats.rbi}</p>
        <p>WAR: ${player.stats.war}</p>
        <p>득점: ${player.stats.runs}</p>
        <p>장타율: ${player.stats.slg}</p>
        <p>출루율: ${player.stats.obp}</p>
        <p>OPS: ${player.stats.ops}</p>
        <p>득점권타율: ${player.stats.risp}</p>
        <p>wRC: ${player.stats.wRC}</p>
        <p>포지션: ${player.stats.position}</p>
    `;
    card.appendChild(details);

    card.addEventListener('click', () => {
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });

    container.appendChild(card);
});
