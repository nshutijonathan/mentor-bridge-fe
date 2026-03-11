const API_BASE_URL = "/api/v1/users";

function buildQuery(filters = {}) {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") {
      return;
    }

    params.set(key, String(value));
  });

  const query = params.toString();
  return query ? `?${query}` : "";
}

async function request(path = "") {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function requestWithMethod(path, method) {
  const response = await fetch(`${API_BASE_URL}${path}`, { method });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

async function requestWithBody(path, method, payload) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getUsers(options = {}) {
  const { scope = "all", ...filters } = options;
  const query = buildQuery(filters);

  if (scope === "mentors") {
    return request(`/mentors${query}`);
  }

  if (scope === "mentees") {
    return request(`/mentees${query}`);
  }

  return request(`/${query}`);
}

export async function getUserById(id) {
  if (!id) {
    throw new Error("User id is required");
  }

  return request(`/${id}`);
}

export async function deleteUserById(id) {
  if (!id) {
    throw new Error("User id is required");
  }

  return requestWithMethod(`/${id}`, "DELETE");
}

export async function updateUserById(id, payload) {
  if (!id) {
    throw new Error("User id is required");
  }

  return requestWithBody(`/${id}`, "PATCH", payload);
}

export async function getUserProfile(userId) {
  if (!userId) {
    throw new Error("User id is required");
  }

  return getUserById(userId);
}
