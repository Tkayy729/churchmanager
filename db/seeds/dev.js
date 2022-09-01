exports.seed = async function (knex) {
  await knex.raw('TRUNCATE TABLE "members" CASCADE');
  await knex.raw('TRUNCATE TABLE "groups" CASCADE');
  await knex.raw('TRUNCATE TABLE "member_groups" CASCADE');
  await knex("members").insert([
    {
      id: 1,
      firstName: "Emmanuel",
      lastName: "Tweneboah",
      otherNames: "Koduah",
      dateOfBirth: "1933-06-06",
      status: true,
      hometown: "Tech",
      email: "fdsajfk@gmail.com",
      regionOfHometown: "Ashanti",
      maritalStatus: "single",
      contact: "05254555444",
      residence: "here",
    },
    {
      id: 2,
      firstName: "Emmel",
      lastName: "weneboah",
      otherNames: "uah",
      dateOfBirth: "1978-08-06",
      status: true,
      hometown: "Tech",
      email: "fdsk@gmail.com",
      regionOfHometown: "Asjhanti",
      maritalStatus: "singlej",
      contact: "05254555444",
      residence: "here",
    },
  ]);

  await knex("groups").insert([
    {
      id: 1,
      name: "Youth",
      description: "We we we",
    },
    {
      id: 2,
      name: "Mens",
      description: "Well wel lwe",
    },
  ]);

  await knex("member_groups").insert([
    {
      id: 1,
      memberId: 1,
      groupId: 1,
    },
    {
      id: 2,
      memberId: 2,
      groupId: 1,
    },
    {
      id: 3,
      memberId: 2,
      groupId: 2,
    },
  ]);
};
